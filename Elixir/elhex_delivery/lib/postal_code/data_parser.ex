defmodule ElhexDelivery.PostalCode.DataParser do
  @postal_codes_filepath "data/bg_cities.txt"

  def parse_data do
    [_header | data_rows] = File.read!(@postal_codes_filepath)
    |> String.split("\n")

    data_rows
    |> Enum.map(fn(row) -> String.split(row, "\s") end)
    |> Enum.map(fn(row) ->
      [_city, postal_code, latitude, longitude] = row

      latitude = latitude |> String.replace(" ", "") |> String.to_float
      longitude = longitude |> String.replace(" ", "") |> String.to_float

      {postal_code, {latitude, longitude}}
    end)
    |> Enum.into(%{})
  end
end