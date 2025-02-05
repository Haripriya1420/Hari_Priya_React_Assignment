import React, { useState, useEffect } from 'react';
import { Grid, Button, Typography, Box } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles for React Quill

const CounterApp = () => {
  const [text, setText] = useState(''); // For rich text content

  // Load saved text from localStorage on page load
  useEffect(() => {
    const savedText = localStorage.getItem('richTextContent');
    if (savedText) {
      setText(savedText);
    }
  }, []);

  // Handle text change and persist to localStorage
  const handleTextChange = (value) => {
    setText(value);
    localStorage.setItem('richTextContent', value); // Persist data
  };

  return (
    <Grid container spacing={2} style={{ height: '100vh', padding: '20px' }}>
      {/* Rich Text Editor Section */}
      <Grid item xs={12} md={600}>
        <Box border={1} borderRadius={2} padding={2} height="400px">
          <Typography variant="h6" style={{ marginBottom: '10px' }}>
            Rich Text Editor
          </Typography>
          {/* React Quill editor with custom toolbar */}
          <ReactQuill 
            value={text} 
            onChange={handleTextChange} 
            style={{ height: '300px' }} 
            modules={{
              toolbar: [
                [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                ['bold', 'italic', 'underline'],
                ['link']
              ],
            }} 
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default CounterApp;
