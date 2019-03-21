@pokemons.each do |poke|
  json.set! poke.id do
    json.extract! poke, :id, :name
    json.image_url asset_path(poke.image_url)
    json.items do 
        json.array! poke.items, :id

    end
  end
end
# json.set! @pokemons.id do 
#     json.array! @pokemons, :id, :name, :image_url
# end