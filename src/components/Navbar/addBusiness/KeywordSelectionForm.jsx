import React, { useState } from 'react'

const predefinedKeywords = [
  'React',
  'JavaScript',
  'Web Development',
  'Tailwind CSS',
  'Node.js',
  'API',
  'UI/UX',
  'Frontend',
  'Backend',
  'Database'
]

function KeywordSelectionForm() {
  const [selectedKeywords, setSelectedKeywords] = useState([])
  const [searchKeyword, setSearchKeyword] = useState('')

  // Function to handle keyword selection
  const handleKeywordSelect = (keyword) => {
    if (selectedKeywords.includes(keyword)) {
      // Deselect the keyword
      setSelectedKeywords(selectedKeywords.filter((kw) => kw !== keyword))
    } else {
      // Select the keyword
      setSelectedKeywords([...selectedKeywords, keyword])
    }
  }

  // Function to handle search input
  const handleSearchInputChange = (e) => {
    setSearchKeyword(e.target.value)
  }

  // Filter keywords based on the search input
  const filteredKeywords = predefinedKeywords.filter((keyword) =>
    keyword.toLowerCase().includes(searchKeyword.toLowerCase())
  )

  return (
    <div className="mx-auto max-w-md p-4">
      <h2 className="mb-4 text-2xl font-semibold">Select Keywords:</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search keywords"
          className="w-full rounded border p-2"
          value={searchKeyword}
          onChange={handleSearchInputChange}
        />
      </div>
      <div>
        {filteredKeywords.length > 0 && (
          <ul className="mb-4">
            {filteredKeywords.map((keyword) => (
              <li
                key={keyword}
                onClick={() => handleKeywordSelect(keyword)}
                className="cursor-pointer text-blue-500 hover:underline">
                {keyword}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-4">
        <p className="mb-2">Selected Keywords:</p>
        <ul>
          {selectedKeywords.map((keyword) => (
            <li key={keyword}>{keyword}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default KeywordSelectionForm
