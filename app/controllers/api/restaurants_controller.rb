class Api::RestaurantsController < ApplicationController
    def index
        if params[:searchTerm]
            @restaurants = Restaurant.find_by_search(params[:searchTerm])
            if @restaurants
                render :index
            else
                render json: ["No Restaurants Found"], status: 418
            end
        else
            @restaurants = Restaurant.all
            render :index
        end
    end

    def show
        @restaurant = Restaurant.find_by(id: params[:id])
        render :show
    end
end
