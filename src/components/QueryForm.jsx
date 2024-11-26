import React, { useState, useEffect } from "react";

const QueryForm = () => {
  const [formData, setFormData] = useState({ name: "", contact: "", query: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact || !formData.query) return;
    setLoading(true);
    const queries = JSON.parse(localStorage.getItem("queries")) || [];
    queries.push(formData);
    localStorage.setItem("queries", JSON.stringify(queries));
    setLoading(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: "", contact: "", query: "" });
    setSubmitted(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">
          Submit Your Query
        </h2>
        {submitted ? (
          <p className="text-center text-lg text-green-500">
            Thank you for your query! We'll contact you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                id="nameInput"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                value={formData.name}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Contact Number"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                value={formData.contact}
              />
            </div>
            <div>
              <textarea
                placeholder="Your Query"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                value={formData.query}
              />
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                disabled={loading || !formData.name || !formData.contact || !formData.query}
                className={`px-6 py-3 ${loading || !formData.name || !formData.contact || !formData.query ? 'bg-gray-400' : 'bg-blue-600'} text-white font-bold rounded-lg`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 bg-gray-300 text-black font-bold rounded-lg hover:bg-gray-400"
              >
                Reset
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default QueryForm;
