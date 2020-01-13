@cities.each do |city|
    json.set! city.id do
        json.id city.id
        json.name city.name
        json.count city.restaurant_count
    end
end