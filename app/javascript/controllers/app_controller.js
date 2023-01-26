import { Controller } from "@hotwired/stimulus";
import React from "react";
import { createRoot } from "react-dom/client";
import Unapp from "../components/Unapp ";

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("App controller connected");
    const unapp = document.getElementById("unapp");
    createRoot(unapp).render(<Unapp />);
  }
}