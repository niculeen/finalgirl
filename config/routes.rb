Rails.application.routes.draw do
  root to: "home#index"
  get "/terms", to: "home#terms"
  post "save_photo", to: "home#save_photo"
end
