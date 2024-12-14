import '@/assets/styles.css'
import PageLayout from '@/components/PageLayout/PageLayout.jsx'
import { ServerProvider } from '@/ServerContext.jsx'

function App() {

  return (
    <>
      <ServerProvider>
        <PageLayout/>
      </ServerProvider>
    </>
  );
};

export default App;
