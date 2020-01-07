# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = User.create(
        username: 'demo', 
        email: 'demo_fsp@gmail.com', 
        password: 'password', 
        first_name: 'Guest',
        last_name: 'Demo',
        phone: 1234567890
        )
