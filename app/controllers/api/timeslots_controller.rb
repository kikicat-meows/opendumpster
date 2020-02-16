class Api::TimeslotsController < ApplicationController

    def index
        requested_seats = search_params[:seats].to_i
        requested_time = search_params[:time].to_f
        requested_date = search_params[:date].to_date
        requested_day = search_params[:date].to_time.strftime("%A")
        format_day = requested_day[0,3]     

        restaurant = Restaurant.find_by(id: params[:restaurant_id])
        req_timeslot = Timeslot.find_by(time: requested_time, day: format_day)

        reqday_timeslots = Timeslot.find_timeslots_by_day(format_day)

        @available_timeslots = restaurant.find_timeslots(requested_date, requested_seats, req_timeslot, reqday_timeslots)
    end


    private

    def search_params
        params.require(:search).permit(:date, :time, :seats)
    end

end
