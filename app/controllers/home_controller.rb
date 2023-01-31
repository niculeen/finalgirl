class HomeController < ApplicationController

  def index
  end

  def save_photo
    @card = Card.create!(card_params)
    respond_to do |format|
      if @card.save
        # format.js
      else
        format.json { render json: @card.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def card_params
    params.require(:card).permit(:photo)
  end

end
