export default async function handler(req, res) {
    const url = "http://www.vrbo.com/icalendar/43c8e2d5349b46bd979334a380a0c896.ics?nonTentative";
  
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
