export const COLORS = {
  primary_600: "#20C498",
  primary_500: "#28F7CB",
  primary_400: "#53F7CB",
  primary_300: "#7EF9D8",
  primary_200: "#A9FBE5",

  secondary_600: "#472ACC",
  secondary_500: "#5935FF",
  secondary_400: "#7A5DFF",
  secondary_300: "#9B86FF",
  secondary_200: "#BDAEFF",

  auxiliary_red: "#E93F66",
  auxiliary_yellow: "#FFC866",
  auxiliary_green: "#15CE9A",

  gray_1: "#1C1C1E",
  gray_2: "#38373c",
  gray_3: "#54535B",
  gray_4: "#706e79",
  gray_5: "#8C8A97",
  gray_6: "#A3A1AC",
  gray_7: "#BAB9C1",
  gray_8: "#D1D0D5",
  gray_9: "#E8E8EA",
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const FONTS = {
  bold: "InterBold",
  semiBold: "InterSemiBold",
  medium: "InterMedium",
  regular: "InterRegular",
  light: "InterLight",
};

export const SHADOWS = {
  // a testar
  light: {
    shadowColor: COLORS.gray_4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray_2,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray_1,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
    
  },
};
