class Api::RestaurantsController < ApplicationController
    def index
        requested_seats = restaurant_params[:seats].to_i
        requested_time = restaurant_params[:time].to_f
        requested_date = restaurant_params[:date].to_date
        requested_day = restaurant_params[:date].to_time.strftime("%A")
        format_day = requested_day[0,3]

        req_timeslots = Timeslot.generate_searching_timeslots(requested_time, format_day)

        if params[:search][:searchTerm]
            restaurants = Restaurant.find_by_search(params[:search][:searchTerm])
        else
            restaurants = Restaurant.all
        end

        @available_restaurants = []

        restaurants.each do |restaurant|
            avail_timeslots = []
            req_timeslots.each do |timeslot|
                if restaurant.available_seats(requested_date, timeslot.id) >= requested_seats
                    avail_timeslots.push(timeslot)
                end
            end
            @available_restaurants.push([restaurant, avail_timeslots]) unless avail_timeslots.empty?
        end

        render :index
    end

    def show
        @restaurant = Restaurant.find_by(id: params[:id])
        render :show
    end


    private

    def restaurant_params
        params.require(:search).permit(:date, :time, :seats, :searchTerm)
    end


end
