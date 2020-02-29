class Api::FavoritesController < ApplicationController

    def index
        @user = User.find_by(id: params[:user_id])

        @favorite_restaurants = @user.favorite_restaurants
    end

    def create
        @favorite = Favorite.new(favorite_params)
        @user = User.find_by(id: params[:favorite][:user_id])

        if @favorite.save!
            render 'api/users/show', user: @user
        else
            render json: @favorite.errors.full_messages, status: 418
        end
    end

    def destroy
        @favorite = Favorite.find_by(id: params[:id])

        if current_user.id === @favorite.user_id
            @favorite.destroy!
        else
            render json: ["Cannot remove someone else's saved restaurant"], status: 418
        end
    end

    private

    def favorite_params
        params.require(:favorite).permit(:user_id, :restaurant_id)
    end
end
