json.timeslots(@available_timeslots) do |timeslot|
    if timeslot != "none"
        json.extract! timeslot, :id, :day, :time
    else
        json.id "none"
    end
end

