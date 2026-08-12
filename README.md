{
  "name": "01vitereact",
  "private": true,             //याचा अर्थ हा project npm वर publish होणार नाही.
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",              //Development server सुरू करतो.
    "build": "vite build",      //1 -> TypeScript compile करून type checking करतो
                                // 2-> Production build तयार करतो.
    "lint": "eslint .",           //Code quality तपासतो.
    "preview": "vite preview"     //Production build locally चालवतो.
  },
  "dependencies": {
    "react": "^19.2.8",            //react  => React library.
    "react-dom": "^19.2.8"         //   React ला browser मध्ये render करते. 
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.4",
    "eslint": "^10.8.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.3",
    "globals": "^17.7.0",
    "vite": "^8.2.0"
  }
}

 