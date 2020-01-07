class Api::UsersController < ApplicationController

    def show
        @user = User.find_by(id: params[:id])
        if @user
            render :show
        else
            render json: @user.errors.full_messages, status: 418
        end
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 418
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :first_name, :last_name, :phone)
    end
end
