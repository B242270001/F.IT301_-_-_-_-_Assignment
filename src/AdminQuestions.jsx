import React, { useState } from 'react';

export default function AdminQuestions() {
  const [formData, setFormData] = useState({
    unitId: 'unit-101',
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 0
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/admin/questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const result = await res.json();
    if (result.success) {
      alert('Асуулт амжилттай нэмэгдлээ!');
      setFormData({ unitId: 'unit-101', question: '', options: ['', '', '', ''], correctAnswer: 0 });
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow mt-6">
      <h1 className="text-2xl font-bold mb-4">Багш: Асуулт засах / Нэмэх</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Нэгж (Unit ID)</label>
          <input
            type="text"
            value={formData.unitId}
            onChange={e => setFormData({ ...formData, unitId: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Асуултын текст</label>
          <textarea
            value={formData.question}
            onChange={e => setFormData({ ...formData, question: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Сонголтууд</label>
          {formData.options.map((opt, idx) => (
            <input
              key={idx}
              type="text"
              placeholder={`Сонголт ${idx + 1}`}
              value={opt}
              onChange={e => {
                const newOpts = [...formData.options];
                newOpts[idx] = e.target.value;
                setFormData({ ...formData, options: newOpts });
              }}
              className="w-full border p-2 rounded mb-2"
              required
            />
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Зөв хариултын дугаар (0 - 3)</label>
          <input
            type="number"
            min="0"
            max="3"
            value={formData.correctAnswer}
            onChange={e => setFormData({ ...formData, correctAnswer: Number(e.target.value) })}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700">
          Асуулт хадгалах
        </button>
      </form>
    </div>
  );
}
