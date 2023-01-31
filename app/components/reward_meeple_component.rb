class RewardMeepleComponent < ViewComponent::Base
  def initialize(id:, hidden: '', top: 0)
    @id = id
    @hidden = hidden
    @top = top
  end
end
