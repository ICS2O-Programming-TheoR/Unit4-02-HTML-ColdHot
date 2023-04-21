// Copyright (c) 2022 Theo Rafuse All rights reserved
// Created by: Theo Rafuse
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"

function whatsTheTemperature() {
  const temperature = parseInt(document.getElementById("temp-info").value);
  const tempMedium = 15;

  if (temperature > tempMedium) {
    document.getElementById("temp-amount").innerHTML = "It is hot outside today.";
  }
  
  else if (temperature < tempMedium) {
    document.getElementById("temp-amount").innerHTML = "It is cold outside today.";
  }
}
