import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

export function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export const loadImageFromGallery = async (array) => {
  const response = { status: false, image: null };
  return response;
};
