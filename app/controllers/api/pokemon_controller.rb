class Api::PokemonController < ApplicationController
    def index
        @pokemons = Pokemon.all.includes(:items)
        render :index
    end

    def show
        @pokemon = Pokemon.includes(:items).find_by(id: params[:id])
        render :show
    end

    def create 

        @pokemon = Pokemon.new(pokemon_params)
        if @pokemon.save
            render json: @pokemon
        end
    end


    private
    def pokemon_params
        params.require(:pokemon).permit(:name, :image_url, :poke_type, :attack, :defense, :moves)
    end

end
