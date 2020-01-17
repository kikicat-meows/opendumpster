# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).


require 'faker'

User.destroy_all
City.destroy_all
Restaurant.destroy_all
Cuisine.destroy_all
Timeslot.destroy_all
OperationHour.destroy_all
Reservation.destroy_all

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
        email: Faker::Internet.unique.free_email, 
        password: 'password', 
        fname: 'Bobby',
        lname: 'Siu'
        )
guest3 = User.create(
        id: 4,
        email: Faker::Internet.unique.free_email, 
        password: 'password', 
        fname: 'Calvin',
        lname: 'Lok'
		)
guest4 = User.create(
        id: 5,
        email: Faker::Internet.unique.free_email, 
        password: 'password', 
        fname: Faker::Name.unique.first_name,
        lname: Faker::Name.unique.last_name,
		)
guest5 = User.create(
        id: 6,
        email: Faker::Internet.unique.free_email, 
        password: 'password', 
        fname: Faker::Name.unique.first_name,
        lname: Faker::Name.unique.last_name,
		)
guest6 = User.create(
        id: 7,
        email: Faker::Internet.unique.free_email, 
        password: 'password', 
        fname: Faker::Name.unique.first_name,
        lname: Faker::Name.unique.last_name,
		) 
guest7 = User.create(
        id: 8,
        email: Faker::Internet.unique.free_email, 
        password: 'password', 
        fname: Faker::Name.unique.first_name,
        lname: Faker::Name.unique.last_name,
		) 		
guest8 = User.create(
        id: 9,
        email: Faker::Internet.unique.free_email, 
        password: 'password', 
        fname: Faker::Name.unique.first_name,
        lname: Faker::Name.unique.last_name,
		)
guest9 = User.create(
        id: 10,
        email: Faker::Internet.unique.free_email, 
        password: 'password', 
        fname: Faker::Name.unique.first_name,
        lname: Faker::Name.unique.last_name,
		)		


# Cities
cities = City.create([
        {id: 1, name: 'San Francisco'},
		{id: 2, name: 'New York'},
		{id: 3, name: 'Los Angelos'},
		{id: 4, name: 'Las Vegas'}
        ])

# cuisines
## split into 3 groups
### first by nationality
### second by subcategory of food


cuisine_origin = [
	'American', 
	'French', 
	'Italian', 
	'Californian', 
	'Mexican',
	'Japanese', 
	'Korean', 
	'Chinese', 
	'Thai'
]

cuisine_sub = [
	'Steakhouse',
	'Sushi',
	'Ramen',
	'Dim Sum',
	'Seafood',
	'Tapas / Small Plates'
]


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


# Restaurants
	## Cuisines
	## Operation Hours

## Tsuta:
tsuta = Restaurant.create(id: 1,
        name: "Tsuta Japanese Soba Noodles",
        address: "155 4th Street",
        phone: "(415) 757-0092",
        website: "https://tsutaramenusa.com",
        description: "A Michelin-starred ramen outfit from Tokyo brings high-minded noodles & sides to buzzy quarters.",
		city_id: 1)

Cuisine.create([
	{name: cuisine_origin[5],
	restaurant_id: 1},
	{name: cuisine_sub[2],
	restaurant_id: 1}
])

# M: 5-24 (11 - 9)
# T: 35-56 (11 - 10)
# W: 65-84 (11 - 9)
# R: 95-114 (11 - 9)
# F: 125-146 (11 - 10)
# S: 155-176 (11 - 10)
# S: 185-204 (11 - 9)


(5..24).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 1, capacity: 10)
end

(35..56).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 1, capacity: 10)
end

(65..84).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 1, capacity: 10)
end

(95..114).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 1, capacity: 10)
end

(125..146).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 1, capacity: 10)
end

(155..176).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 1, capacity: 10)
end

(185..204).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 1, capacity: 10)
end

## Niku:
niku = Restaurant.create(id: 2,
        name: "Niku Steakhouse",
        address: "61 Division St",
        phone: "(415) 829-7817",
        website: "https://nikusteakhouse.com",
        description: "Japanese-American menu of house-cut wagyu & local sides by the Omakase Group (Omakase, Udon Time).",
		city_id: 1)

Cuisine.create([
	{name: cuisine_origin[5],
	restaurant_id: 2},
	{name: cuisine_sub[0],
	restaurant_id: 2}
])

# M: 16-26 (4:30 - 10)
# T: 46-56 (4:30 - 10)
# W: 76-86 (4:30 - 10)
# R: 106-116 (4:30 - 10)
# F: 136-146 (4:30 - 10)
# S: 166-176 (4:30 - 10)
# S: 196-206 (4:30 - 10)

(16..26).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 2)
end

(46..56).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 2)
end

(76..86).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 2)
end

(106..116).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 2)
end

(136..146).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 2)
end

(166..176).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 2)
end

(196..206).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 2)
end


## Foreign Cinema:
foreign_cinema = Restaurant.create(id: 3,
        name: "Foreign Cinema",
        address: "2534 Mission St",
        phone: "(415) 648-7600",
        website: "https://www.foreigncinema.com",
        description: "Crowds eat Californian-Mediterranean fare (& a popular brunch) in an outdoor space screening films.",
		city_id: 1)

Cuisine.create([
	{name: cuisine_origin[3],
	restaurant_id: 3}
])

# M: 18-26 (5:30 - 10)
# T: 48-56 (5:30 - 10)
# W: 78-86 (5:30 - 10)
# R: 108-118 (5:30 - 11)
# F: 138-148 (5:30 - 11)
# S: 168-178 (5:30 - 11)
# S: 198-206 (5:30 - 10)



(18..26).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 3)
end

(48..56).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 3)
end

(78..86).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 3)
end

(108..118).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 3)
end

(138..148).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 3)
end

(168..178).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 3)
end

(198..206).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 3)
end


## AL's place:
als_place = Restaurant.create(id: 4,
        name: "AL's Place",
        address: "1499 Valencia St",
        phone: "(415) 416-6136",
        website: "https://alsplacesf.com",
        description: "Relaxed, modern New American restaurant for an inventive take on seafood & vegetable dishes.",
		city_id: 1)

Cuisine.create([
	{name: cuisine_origin[0],
	restaurant_id: 4},
	{name: cuisine_origin[3],
	restaurant_id: 4},
	{name: cuisine_sub[4],
	restaurant_id: 4}
])

# M: Closed
# T: Closed
# W: 78-86 (5:30 - 10)
# R: 108-116 (5:30 - 10)
# F: 138-146 (5:30 - 10)
# S: 168-176 (5:30 - 10)
# S: 198-206 (5:30 - 10)

(78..86).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 4)
end

(108..116).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 4)
end

(138..146).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 4)
end

(168..176).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 4)
end

(198..206).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 4)
end


## Hakkasan:
hakka_sf = Restaurant.create(id: 5,
        name: "Hakkasan - San Francisco",
        address: "1 Kearny St",
        phone: "(415) 829-8148",
        website: "https://hakkasan.com",
        description: "Link in an upscale Chinese chain produces Cantonese specialties in glitzy digs with a hip lounge.",
		city_id: 1)

Cuisine.create([
	{name: cuisine_origin[7],
	restaurant_id: 5},
	{name: cuisine_sub[3],
	restaurant_id: 5}
])

# M: 17-26 (5 - 10)
# T: 47-56 (5 - 10)
# W: 77-86 (5 - 10)
# R: 107-116 (5 - 10)
# F: 137-146 (5 - 10)
# S: 167-176 (5 - 10)
# S: Closed

(17..26).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 5)
end

(47..56).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 5)
end

(77..86).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 5)
end

(107..116).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 5)
end

(137..146).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 5)
end

(167..176).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 5)
end


## Hakkasan:
hakka_ny = Restaurant.create(id: 6,
        name: "Hakkasan - New York",
        address: "311 W 43rd St",
        phone: "(212) 776-1818",
        website: "https://hakkasan.com",
        description: "Cavernous outpost of a London-based chain showcasing modern Cantonese cuisine in a slick setting.",
		city_id: 2)

Cuisine.create([
	{name: cuisine_origin[7],
	restaurant_id: 6},
	{name: cuisine_sub[3],
	restaurant_id: 6}
])

# M: 17-27 (5 - 10:30)
# T: 47-57 (5 - 10:30)
# W: 77-87 (5 - 10:30)
# R: 107-117 (5 - 10:30)
# F: 137-147 (5 - 10:30)
# S: 167-177 (5 - 10:30)
# S: 197-207 (5 - 10:30)

(17..27).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 6)
end

(47..57).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 6)
end

(77..87).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 6)
end

(107..117).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 6)
end

(137..147).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 6)
end

(167..177).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 6)
end

(197..207).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 6)
end


## Momofuku Noodle Bar - NY:
momofuku_ny = Restaurant.create(id: 7,
        name: "Momofuku Noodle Bar",
        address: "171 1st Avenue",
        phone: "(212) 777-7773",
        website: "https://noodlebar-ny.momofuku.com",
        description: "David Chang's Asian-accented American fare comes with an open kitchen, spare decor & dinner crowds.",
		city_id: 2)

Cuisine.create([
	{name: cuisine_origin[7],
	restaurant_id: 7}
])

# M: 18-28 (5:30 - 11)
# T: 48-58 (5:30 - 11)
# W: 78-88 (5:30 - 11)
# R: 108-118 (5:30 - 11)
# F: 138-150 (5:30 - 12)
# S: 168-180 (5:30 - 12)
# S: 198-208 (5:30 - 11)

(18..28).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 7)
end

(48..58).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 7)
end

(78..88).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 7)
end

(108..118).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 7)
end

(138..150).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 7)
end

(168..180).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 7)
end

(198..208).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 7)
end


## Momofuku - LV:
momofuku_lv = Restaurant.create(id: 8,
        name: "Momofuku",
        address: "Boulevard Tower 3708, Las Vegas Blvd S Level 2",
        phone: "(702) 698-2663",
        website: "https://noodlebar-ny.momofuku.com",
        description: "David Chang offers inventive takes on Asian fare at this hip, spacious outpost in the Cosmopolitan.",
		city_id: 4)

Cuisine.create([
	{name: cuisine_origin[7],
	restaurant_id: 8},
	{name: cuisine_origin[0],
	restaurant_id: 8}
])

# M: 5-28 (11 - 11)
# T: 35-58 (11 - 11)
# W: 65-88 (11 - 11)
# R: 95-118 (11 - 11)
# F: 125-148 (11 - 11)
# S: 155-178 (11 - 11)
# S: 185-208 (11 - 11)

(5..28).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 8)
end

(35..58).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 8)
end

(65..88).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 8)
end

(95..118).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 8)
end

(125..148).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 8)
end

(155..178).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 8)
end

(185..208).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 8)
end


## Anjelica's Restaurant - NY:
anjelica_ny = Restaurant.create(id: 9,
        name: "Anjelica's Restaurant",
        address: "1070 Ocean Ave",
        phone: "(732) 842-2800",
        website: "https://anjelicas.com",
        description: "Cozy BYOB eatery with a buzzy vibe offers classic Southern Italian plates & seafood specialties.",
		city_id: 2)

Cuisine.create([
	{name: cuisine_origin[2],
	restaurant_id: 9},
	{name: cuisine_sub[4],
	restaurant_id: 9}
])

# M: Closed
# T: Closed
# W: 76-85 (4:30 - 9:30)
# R: 106-115 (4:30 - 9:30)
# F: 136-148 (4:30 - 11)
# S: 166-178 (4:30 - 11)
# S: 191-203 (2 - 8:30)

(76..85).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 9)
end

(106..115).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 9)
end

(136..148).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 9)
end

(166..178).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 9)
end

(191..203).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 9)
end


## La Folie - SF
la_folie = Restaurant.create(id: 10,
        name: "La Folie",
        address: "2316 Polk St",
        phone: "(415) 776-5577",
        website: "",
        description: "Classic French dinners for a fixed price served in an ornate dining room with an adjacent lounge.",
		city_id: 1)

Cuisine.create([
	{name: cuisine_origin[1],
	restaurant_id: 10}
])

# M: Closed
# T: 48-57 (5:30 - 10:30)
# W: 78-87 (5:30 - 10:30)
# R: 108-117 (5:30 - 10:30)
# F: 137-147 (5 - 10:30)
# S: 167-177 (5 - 10:30)
# S: Closed

(48..57).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 10)
end

(78..87).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 10)
end

(108..117).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 10)
end

(137..147).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 10)
end

(167..177).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 10)
end


## Sons & Daughters:
sons_daughters = Restaurant.create(id: 11,
        name: "Sons & Daughters",
        address: "708 Bush St",
        phone: "(415) 391-8311",
        website: "https://sonsanddaughterssf.com",
        description: "Cozy spot with open kitchen serving a seasonal tasting menu sourced from local gardens, plus wines.",
		city_id: 1)

Cuisine.create([
	{name: cuisine_origin[0],
	restaurant_id: 11},
	{name: cuisine_origin[3],
	restaurant_id: 11}
])

# M: Closed
# T: Closed
# W: 77-85 (5 - 9:30)
# R: 107-115 (5 - 9:30)
# F: 137-145 (5 - 9:30)
# S: 167-175 (5 - 9:30)
# S: 197-205 (5 - 9:30)

(77..85).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 11)
end

(107..115).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 11)
end

(137..145).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 11)
end

(167..175).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 11)
end

(197..205).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 11)
end


## LihoLiho:
liholiho = Restaurant.create(id: 12,
        name: "Liholiho Yacht Club",
        address: "871 Sutter St",
        phone: "(415) 440-5446",
        website: "https://liholihoyachtclub.com",
        description: "Buzzy, casual eatery for Hawaiian, Indian & Chinese dishes in a brick-walled space with booths.",
		city_id: 1)

Cuisine.create([
	{name: cuisine_sub[4],
	restaurant_id: 12}
])

# M: 17-27 (5 - 10:30)
# T: 47-57 (5 - 10:30)
# W: 77-87 (5 - 10:30)
# R: 107-117 (5 - 10:30)
# F: 137-148 (5 - 11)
# S: 167-178 (5 - 11)
# S: Closed

(17..27).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 12)
end

(47..57).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 12)
end

(77..87).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 12)
end

(107..117).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 12)
end

(137..148).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 12)
end

(167..178).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 12)
end


## Mott 32
mott32 = Restaurant.create(id: 13,
        name: "Mott 32 Las Vegas",
        address: "3325 S Las Vegas Blvd #206",
        phone: "(702) 607-3232",
        website: "https://mott32.com",
        description: "Mott 32 represents modern Hong Kong as well as a new chapter of Chinese dining. Named after the famed convenience store on 32 Mott Street in New York, the restaurant captures the dynamism of NYC’s vibrant Chinatown.",
		city_id: 4)

Cuisine.create([
	{name: cuisine_origin[7],
	restaurant_id: 13}
])

# M: 17-28 (5 - 11)
# T: 47-58 (5 - 11)
# W: 77-88 (5 - 11)
# R: 107-118 (5 - 11)
# F: 137-148 (5 - 11)
# S: 167-178 (5 - 11)
# S: 197-208 (5 - 11)

(17..28).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 13)
end

(47..58).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 13)
end

(77..88).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 13)
end

(107..118).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 13)
end

(137..148).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 13)
end

(167..178).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 13)
end

(197..208).each do |i|
	OperationHour.create(timeslot_id: i, restaurant_id: 13)
end


# Test Field
# Reservation.create(
# 	user_id: 2,
# 	date: Date.parse("Jan 20, 2020"),
# 	seats: 2,
# 	restaurant_timeslot_capacity_id: 1
# )