# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_17_202720) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_cities_on_name"
  end

  create_table "cuisines", force: :cascade do |t|
    t.integer "restaurant_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name", null: false
    t.index ["name"], name: "index_cuisines_on_name"
    t.index ["restaurant_id"], name: "index_cuisines_on_restaurant_id"
  end

  create_table "operation_hours", force: :cascade do |t|
    t.integer "restaurant_id", null: false
    t.integer "timeslot_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "capacity", default: 20, null: false
    t.index ["restaurant_id"], name: "index_operation_hours_on_restaurant_id"
    t.index ["timeslot_id"], name: "index_operation_hours_on_timeslot_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "user_id", null: false
    t.date "date", null: false
    t.integer "seats", null: false
    t.boolean "cancellation", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "restaurant_id", null: false
    t.integer "timeslot_id", null: false
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "address", null: false
    t.string "phone", null: false
    t.string "website"
    t.text "description"
    t.integer "city_id", null: false
    t.index ["city_id"], name: "index_restaurants_on_city_id"
    t.index ["name"], name: "index_restaurants_on_name"
  end

  create_table "timeslots", force: :cascade do |t|
    t.string "day", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "time", null: false
    t.index ["day"], name: "index_timeslots_on_day"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
