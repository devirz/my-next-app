let url = "amin-store-xi.vercel.app"

fetch("https://vercel.live/api/feedback/sharing?hostname=" + url, {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,fa;q=0.8",
    "authorization": "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Gp0TgZTk-MGusIUf.g4aCBYZfg-ALjoSj0Obspcgd_NUVzsttd6sCbZcGVMvSx3SF04yNRTUXxi9eLYEDjqnNRlXajTxY9T0byaxlCzm8q_nVfGa7mNtndTNIPmjaa-d9PL-KvBa0-mz7UAHoiyd0uobcvHSCH0pSRLonE4p_CFZoy22BMfMCiuSaoy1MMJuzrrn-lLL7oJb8DOXdesT3XTgFSO0bpg_oP-L9fWf4pAKfqMg9ZhdzOhT-rUfrjzmCqbTlaPg607_qNyEXnPMSMxgRKmSNwB5-JdTk8QPXooUYtzeO96qQA2P0Bq9qTvSPtPaqdEMbjtYHULU7WJiKf9mAGSaB9KIi6KsQjEjWTuiRuoukXzoGIUeHwtA5LaPWeihH__rkvBplVEUlxdutpPNEa7a7K6dsF0LcUNCcxqcIXZiLMhZrNObldBFP1Cz5ekIqUaXJYEC9935P73F6BzWBNsw7rNgOJS6z_5kHyK4uPr-5pMrv4c1IkQEe7VUwIPwv67XQPsg2ni-Af2Zw7Twjj3HK4xPmbra1n6MnnIsinM7M7aPtq5EepZ_6x8EGSHFPkQe_dmiI41wOgElCK65ccw.qtNc9OJr2T44tcGK5uavlg",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "vercel-feature-flags=eyJhbGciOiJIUzI1NiJ9.eyJzaGFyaW5nTW9kYWwiOnRydWUsImJyYW5jaFN3aXRjaGVyIjp0cnVlLCJhY2Nlc3NpYmlsaXR5QXVkaXRBdXRvUnVuIjp0cnVlLCJleHAiOjE3MzA4OTEzNTh9.7-144IGIFC_XgPEZYslWXOZc8m8zXm3wGJO-TgpZias",
    "Referer": "https://vercel.live/_next-live/feedback/feedback.html",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
}).then(s => {
  s.json().then(r => console.log(r))
})