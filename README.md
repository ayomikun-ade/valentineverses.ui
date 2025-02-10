# ValentineVerses

This repository contains the frontend code for ValentineVerses - a Love Letter/Poem Generator application - built using React and Tailwind CSS.

## Overview

The frontend provides a user interface for generating personalized love letters and poems using the Llama 3 model via a FastAPI backend. Users can input the sender's name, receiver's name, and optional additional information to generate a unique love letter, or provide requests for a generated poem.  The generated content can be downloaded as an image or copied to the clipboard.

## Preview
![valentineverses home page](https://github.com/user-attachments/assets/f1e17989-b2e6-48c6-9621-86682457a8dd)


## Features

*   **User Input Forms:**  Forms for entering sender and receiver names, and additional information for the love letter.
*   **AI-Powered Generation:**  Communicates with the FastAPI backend to generate love letters and poems using the Llama 3 model.
*   **Dynamic Styling:** Applies dynamic styling using Tailwind CSS to the generated content, including special styling for opening and closing salutations.
*   **Download as Image:**  Allows users to download the generated love letter or poem as a JPG image.
*   **Copy to Clipboard:** Provides a button to copy the generated text to the clipboard.

## Technologies Used

*   **React:**  A JavaScript library for building user interfaces.
*   **Tailwind CSS:**  A utility-first CSS framework for styling the application.
*   **Axios:**  A promise-based HTTP client for making API requests to the backend.
*   **html2canvas:** A JavaScript library to render HTML elements as images.

## Setup Instructions

1.  **Clone the repository:**

    ```
    git clone https://github.com/ayomikun-ade/valentineverses.ui.git
    cd valentineverses.ui
    ```

2.  **Install dependencies:**

    ```
    npm install
    ```

3.  **Environment Variables:**

    *   Create a `.env` file in the root directory.
    *   Add any necessary environment variables (e.g., API keys, backend URL).

4.  **Start the development server:**

    ```
    npm run dev
    ```

    The application will be accessible at `http://localhost:5173` (or the port configured in your setup).


## Contributing

Contributions are welcome! Please fork the repository, create a new branch for your feature or bug fix, and submit a pull request.


**Ciao!**
