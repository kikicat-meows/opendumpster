class Api::ReviewsController < ApplicationController

    def index
        
    end

    def show
        @review = Review.find_by(id: params[:id])

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
