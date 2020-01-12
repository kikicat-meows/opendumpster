# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'


User.destroy_all
City.destroy_all
Restaurant.destroy_all
Cuisine.destroy_all
Timeslot.destroy_all

demo = User.create(
    	id: 1,
        email: 'fsp_demo@gmail.com', 
        password: 'password', 
        fname: 'TrashPanda',
        lname: 'Demo'
        )
guest1 = User.create(
        id: 2, 
        email: 'helenkei.cheung@gmail.com', 
        password: 'password', 
        fname: 'Helen',
        lname: 'Cheung'
        )
guest2 = User.create(
        id: 3, 
        email: 'bobbysiu85@gmail.com', 
        password: 'password', 
        fname: 'Bobby',
        lname: 'Siu'
        )
guest3 = User.create(
        id: 4,
        email: 'calvinslok@gmail.com', 
        password: 'password', 
        fname: 'Calvin',
        lname: 'Lok'
        )      

# Cities
cities = City.create([
        {id: 1, name: 'San Francisco'},
        {id: 2, name: 'New York'}
        ])


# Restaurants
restaurants = Restaurant.create ([
        {id: 1,
        name: "Test 1",
        address: "000 fake ave",
        phone: "123-456-7890",
        website: "",
        description: "",
		city_id: 1},
		{id: 2,
        name: "Test 2",
        address: "000 fake ave",
        phone: "123-456-7890",
        website: "",
        description: "",
		city_id: 1},
		{id: 3,
        name: "Test 3 - San Francisco",
        address: "000 fake ave",
        phone: "123-456-7890",
        website: "",
        description: "",
		city_id: 2},
		{id: 4,
        name: "Test 4",
        address: "000 fake ave",
        phone: "123-456-7890",
        website: "",
        description: "",
        city_id: 2}

])


# cuisines
cuisines = Cuisine.create([
	{name: 'American',
	restaurant_id: 4},
	{name: 'San Francisco',
	restaurant_id: 4}
])




# Timeslots
days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
time_blocks = [9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 
	15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5,
	22, 22.5, 23, 23.5]

days.each do |day|
	time_blocks.each do |block|
		Timeslot.create!(day: day, time: block)
	end
end