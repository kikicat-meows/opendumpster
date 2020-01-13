class Api::CitiesController < ApplicationController
    def show
        @city = City.find_by(id: params[:id])
        @restaurants = Restaurant.joins(:city).where(cities: {id: params[:id]})
        if @city
            render :show
        else
            render json: ["Please select a valid city"], status: 418
        end
    end

    def index
        @cities = City.all

        render :index
    end

end
