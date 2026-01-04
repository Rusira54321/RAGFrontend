import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen } from 'lucide-react';
import FileUpload from './components/FileUpload';
import ChatInterface from './components/ChatInterface';

function App() {
  const [documentsUploaded, setDocumentsUploaded] = useState(false);

  const handleUploadSuccess = () => {
    setDocumentsUploaded(true);
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="relative">
              <Sparkles className="w-10 h-10 text-primary-600" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-2 border-primary-300 border-t-primary-600 rounded-full"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-indigo-600 bg-clip-text text-transparent">
              Universal RAG Assistant
            </h1>
          </motion.div>
          <p className="text-gray-600 text-lg">
            Upload your documents and ask questions powered by AI
          </p>
        </motion.header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* File Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FileUpload onUploadSuccess={handleUploadSuccess} />
          </motion.div>

          {/* Chat Interface Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-[600px]"
          >
            <ChatInterface />
          </motion.div>
        </div>

        {/* Status Indicator */}
        {documentsUploaded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6 text-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full"
            >
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-semibold">
                Documents ready! You can now ask questions.
              </span>
            </motion.div>
          </motion.div>
        )}

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center text-gray-500 text-sm"
        >
          <p>Powered by FastAPI & React</p>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;

