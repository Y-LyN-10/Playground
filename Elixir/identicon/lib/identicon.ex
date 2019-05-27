defmodule Identicon do
  @moduledoc """
    Generates Identicon
  """

  def main(input) do
    input
    |> hash_input
    |> pick_color
    |> build_grid
  end

  @doc """
    Returns an `Identicon.Image` struct with list of hexadecimal values representing the md5 hash value of `input`

  ## Examples

      iex> Identicon.hash_input("banana")
      %Identicon.Image{
        hex: [114, 179, 2, 191, 41, 122, 34, 138, 117, 115, 1, 35, 239, 239, 124, 65]
      }

  """
 
  def hash_input(input) do
    hex = :crypto.hash(:md5, input)
    |> :binary.bin_to_list

    %Identicon.Image{hex: hex}
  end

  @doc """
    Generates RGB color based on the first 3 numbers in `image` hex list

  ## Examples

      iex> image = Identicon.hash_input("banana")
      iex> Identicon.pick_color(image)
      %Identicon.Image{
        color: {114, 179, 2},
        hex: [114, 179, 2, 191, 41, 122, 34, 138, 117, 115, 1, 35, 239, 239, 124, 65]
        }

  """

  def pick_color(%Identicon.Image{hex: [r, g, b | _tail]} = image) do
    %Identicon.Image{image | color: {r, g, b}}
  end

  @doc """ 
    Builds a vertically mirrored gird of size 5x5, filled with hex numbers
  """
  
  def build_grid(%Identicon.Image{hex: hex_list}) do
    hex_list
    |> Enum.chunk_every(3, 3, :discard)
    |> Enum.map(&mirror_row/1)
  end

  @doc """
    Mirrors a row of numbers

  ## Examples
  
      iex> Identicon.mirror_row([114, 179, 2])
      [114, 179, 2, 179, 114]

  """
  
  def mirror_row(row) do
    [first, second | _tail] = row
    row ++ [second, first]
  end
end
