class Api::RestaurantsController < ApplicationController
    def index
        requested_seats = restaurant_params[:seats].to_i
        requested_time = restaurant_params[:time].to_f
        requested_date = restaurant_params[:date].to_date
        requested_day = restaurant_params[:date].to_time.strftime("%A")
        format_day = requested_day[0,3]

        req_timeslot = Timeslot.find_by(time: requested_time, day: format_day)
        reqday_timeslots = Timeslot.find_timeslots_by_day(format_day)

        if params[:search][:searchTerm]
            restaurants = Restaurant.find_by_search(params[:search][:searchTerm])
        else
            restaurants = Restaurant.all
        end

        @available_restaurants = []

        restaurants.each do |restaurant|
            avail_timeslots = restaurant.find_timeslots(requested_date, requested_seats, req_timeslot, reqday_timeslots)

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
