class Api::TimeslotsController < ApplicationController

    def index
        requested_seats = search_params[:seats].to_i
        requested_time = search_params[:time].to_f
        requested_date = search_params[:date].to_date
        requested_day = search_params[:date].to_time.strftime("%A")
        format_day = requested_day[0,3]     

        restaurant = Restaurant.find_by(id: search_params[:restaurant_id])

    end


    private

    def search_params
        params.require(:search).permit(:date, :time, :seats, :restaurant_id)
    end

end
