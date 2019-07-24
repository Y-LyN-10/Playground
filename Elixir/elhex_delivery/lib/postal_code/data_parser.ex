defmodule ElhexDelivery.PostalCode.DataParser do
  @postal_codes_filepath "data/bg_cities.txt"

  def parse_data do
    [_header | data_rows] = File.read!(@postal_codes_filepath)
    |> String.split("\n")

    data_rows
    |> Enum.map(&(String.split(&1, "\s")))
    |> Enum.map(&format_row(&1))
    |> Enum.into(%{})
  end

  defp parse_number(str) do
    str |> String.replace(" ", "") |> String.to_float
  end

  # format multi-element list into a two element tuple
  # [_city, postal_code, latitude, longitude] # => {postal_code, {latitude, longitude}}
  defp format_row([_city, postal_code, latitude, longitude]) do
    latitude = parse_number(latitude)
    longitude = parse_number(longitude)

    {postal_code, {latitude, longitude}}
  end
end