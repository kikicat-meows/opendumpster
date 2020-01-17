class Api::ReservationsController < ApplicationController

    def create
        @reservation = Reservation.new(reservation_params)

        if !Reservation.is_valid?(@reservation)
            render json: ["Sorry, the seats are no longer available, please select another time."], status: 418
            return
        end

        if @reservation.save
            render :show
        else
            render json: @reservation.errors.full_messages, status: 418
        end
    end

    def show
        @reservation = Reservation.find_by(id: params[:id])

        if @reservation
            render :show
        else
            render json: ["No reservation found"], status: 418
        end
    end

    def update
        
    end


    private

    def reservation_params
        params.require(:reservation).permit(:user_id, :restaurant_id, :timeslot_id, :date, :seats)
    end

end
