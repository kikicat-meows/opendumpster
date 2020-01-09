# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.create(
        email: 'fsp_demo@gmail.com', 
        password: 'password', 
        fname: 'TrashPanda',
        lname: 'Demo'
        )

guest1 = User.create(
        email: 'helenkei.cheung@gmail.com', 
        password: '07071988', 
        fname: 'Helen',
        lname: 'Cheung'
        )

guest2 = User.create(
        email: 'bobbysiu85@gmail.com', 
        password: '7788kiki', 
        fname: 'Bobby',
        lname: 'Siu'
        )