# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_session_token  (session_token) UNIQUE
#

class User < ApplicationRecord
    validates :email, :session_token, uniqueness: true
    validates :email, :fname, :lname, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6, allow_nil: true}
    before_validation :ensure_session_token

    has_many :reservations, inverse_of: :user, dependent: :destroy

    has_many :reviews, inverse_of: :user, dependent: :destroy
    has_many :reviewed_restaurants,
        through: :reviews,
        source: :restaurant

    has_many :favorites, inverse_of: :user, dependent: :destroy
    has_many :favorite_restaurants,
        through: :favorites,
        source: :restaurant

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    attr_reader :password

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest) == password
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def get_current_time
        current_time_array = Time.now.to_s(:time).split(":").map(&:to_i)

        if current_time_array[1] > 29
            current_time = current_time_array[0] + 0.5
        else
            current_time = current_time_array[0]
        end

        current_time
    end

    def formatted_reservations
        all_reservations = self.reservations.includes(:timeslot)
        formatted_reservations = {
            'cancelled'=>[],
            'upcoming'=>[],
            'past'=>[]
        }

        current_time = self.get_current_time

        all_reservations.each do |reservation|

            if reservation.cancellation
                formatted_reservations['cancelled'] << reservation
            else
                if reservation.date < Date.today || 
                    (reservation.date == Date.today && reservation.timeslot.time < current_time)

                    formatted_reservations['past'] << reservation
                else
                    formatted_reservations['upcoming'] << reservation
                end
            end
        end

        formatted_reservations
    end

    def visited_restaurants
        past_reservations = self.reservations.includes(:timeslot)
                                .where(reservations: {cancellation: false})
                                .where('reservations.date < ?', Date.today)
                                .pluck(:restaurant_id)
                                .uniq
    end

end
