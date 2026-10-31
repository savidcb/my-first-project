
function QuoteBox({ quote, author, onRefresh }) {
  return (
    <div>
      <h3>ពាក្យសម្ដីអប់រំ</h3>
      <p style={{ fontStyle: 'italic', minHeight: '50px' }}>"{quote}"</p>
      <p style={{ fontWeight: 'bold', color: '#38bdf8' }}>{author}</p>
      
      {/* ពេលចុចប៊ូតុង វានឹងហៅមុខងារ onRefresh ដែលផ្ញើមកពី App.jsx */}
      <button onClick={onRefresh}>ទាញយកថ្មី</button>
    </div>
  );
}

export default QuoteBox;