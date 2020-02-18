class Api::ReviewsController < ApplicationController

    def index
        @restaurant = Restaurant.find_by(id: params[:restaurant_id])
        @reviews = @restaurant.reviews
        @users = @reviews.map do |review|
            User.find_by(id: review.user_id)
        end

        render :index
    end

    def show
        @review = Review.find_by(id: params[:id])
        @user = User.find_by(id: @review.user_id)

        render :show
    end

    def create
        
    end

    def update
        
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        
    end

    private

    def review_params
        params.require(:review).permit(:user_id, :restaurant_id, :rating, :comment)
    end

end
