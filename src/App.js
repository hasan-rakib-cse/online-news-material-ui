import './App.css';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function App() {
  return (
    <div>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#fff', height: '100vh' }}>
          <h1 className='main-heading'>React Material UI</h1>
          <TopHeadline />
          <Header />
        </Box>
      </Container>
    </div>
  );
}

export default App;