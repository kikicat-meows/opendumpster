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
       @review = Review.new(review_params)
       @user = User.find_by(id: params[:review][:user_id])

       if params[:review][:user_id].to_i == current_user.id 
            if @review.save!
                render :show
            else
                render json: @review.errors.full_messages, status: 418
            end
        else
            render json: ["Error, user_id does not match current_user"], status: 404
        end
    end

    def update
        @review = Review.find_by(id: params[:id])
        @user = current_user

        if @user.id == params[:review][:user_id].to_i
            if @review.update(review_params)
                render :show
            else
                render json: @review.errors.full_messages, status: 418
            end
        else
            render json: ["You cannot edit someone else's review"], status: 418
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        
        ActiveRecord::Base.transaction do
            if @review.user_id == current_user.id
                @review.destroy!
            else
                render json: ["You cannot delete someone else's review."], status: 418
            end
        end
    end

    private

    def review_params
        params.require(:review).permit(:user_id, :restaurant_id, :rating, :comment)
    end

end
