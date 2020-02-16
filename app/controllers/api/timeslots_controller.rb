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

        req_timeslot_idx = reqday_timeslots.index(req_timeslot)
        before_timeslots = reqday_timeslots[0...req_timeslot_idx]
        after_timeslots = reqday_timeslots[req_timeslot_idx + 1..-1]

        prior = []
        latter = []

        before_timeslots.each do |timeslot|
            if restaurant.available_seats(requested_date, timeslot.id) >= requested_seats
                prior.push(timeslot)
            end
        end

        after_timeslots.each do |timeslot|
            if restaurant.available_seats(requested_date, timeslot.id) >=
                requested_seats
                latter.push(timeslot)
            end
        end

        while prior.length < 2
            prior.unshift('none')
        end

        while latter.length < 2
            latter.push('none')
        end

        if restaurant.available_seats(requested_date, req_timeslot.id) < requested_seats
            req_timeslot = 'none'
        end

        available_timeslots = prior[-2..-1].concat([req_timeslot]).concat(latter[0..1])

        if available_timeslots.uniq.length == 1
            @available_timeslots = []
        else
            @available_timeslots = available_timeslots
        end

    end


    private

    def search_params
        params.require(:search).permit(:date, :time, :seats)
    end

end
