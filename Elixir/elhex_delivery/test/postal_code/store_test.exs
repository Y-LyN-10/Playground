defmodule ElhexDelivery.PostalCode.StoreTest do
  use ExUnit.Case

  alias ElhexDelivery.PostalCode.Store

  doctest ElhexDelivery

  test "get_geolocation" do
    Store.start_link
    {latitude, longitude} = Store.get_geolocation("1000")

    assert is_float(latitude)
    assert is_float(longitude)
  end
end

# https://www.youtube.com/watch?v=EDu3EwTbrFM