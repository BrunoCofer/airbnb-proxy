export default async function handler(req, res) {
    const url = "https://www.airbnb.com/calendar/ical/786877636617815246.ics?s=4319386076183b6313e63daa79cff5b9";
  
    try {
      const response = await fetch(url);
      const data = await response.text();
  
      res.setHeader('Content-Type', 'text/calendar');
      res.setHeader('Access-Control-Allow-Origin', '*'); // habilita CORS
      res.status(200).send(data);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar calendário" });
    }
  }