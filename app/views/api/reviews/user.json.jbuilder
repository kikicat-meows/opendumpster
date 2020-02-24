@reviews.each_with_index do |review, idx|
    json.set! review.restaurant_id do
        json.extract! review, *review.attributes.keys

    end
end