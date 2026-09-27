<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Sitemap - Location Autocar Bruxelles</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: Arial, sans-serif;
            font-size: 14px;
            color: #333;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
          }
          .header {
            background-color: #1e40af;
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .header p {
            margin: 5px 0 0 0;
            opacity: 0.9;
          }
          .sitemap-table {
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th {
            background-color: #f8f9fa;
            padding: 12px;
            text-align: left;
            font-weight: bold;
            border-bottom: 2px solid #e9ecef;
          }
          td {
            padding: 12px;
            border-bottom: 1px solid #e9ecef;
          }
          tr:hover {
            background-color: #f8f9fa;
          }
          .url {
            color: #1e40af;
            text-decoration: none;
          }
          .url:hover {
            text-decoration: underline;
          }
          .priority {
            font-weight: bold;
          }
          .priority-high { color: #dc2626; }
          .priority-medium { color: #d97706; }
          .priority-low { color: #059669; }
          .stats {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
          }
          .stat-item {
            text-align: center;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 6px;
          }
          .stat-number {
            font-size: 24px;
            font-weight: bold;
            color: #1e40af;
          }
          .stat-label {
            color: #6b7280;
            margin-top: 5px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Sitemap - Location Autocar Bruxelles</h1>
          <p>Plan du site pour les moteurs de recherche et les visiteurs</p>
        </div>
        
        <div class="stats">
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
              <div class="stat-label">Pages totales</div>
            </div>
            <div class="stat-item">
              <div class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:priority >= 0.8])"/></div>
              <div class="stat-label">Pages prioritaires</div>
            </div>
            <div class="stat-item">
              <div class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:changefreq = 'weekly'])"/></div>
              <div class="stat-label">Mises à jour hebdomadaires</div>
            </div>
            <div class="stat-item">
              <div class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:changefreq = 'monthly'])"/></div>
              <div class="stat-label">Mises à jour mensuelles</div>
            </div>
          </div>
        </div>

        <div class="sitemap-table">
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Dernière modification</th>
                <th>Fréquence de changement</th>
                <th>Priorité</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:sort select="sitemap:priority" order="descending"/>
                <tr>
                  <td>
                    <a href="{sitemap:loc}" class="url">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td>
                    <span class="priority">
                      <xsl:attribute name="class">
                        priority
                        <xsl:choose>
                          <xsl:when test="sitemap:priority >= 0.8"> priority-high</xsl:when>
                          <xsl:when test="sitemap:priority >= 0.6"> priority-medium</xsl:when>
                          <xsl:otherwise> priority-low</xsl:otherwise>
                        </xsl:choose>
                      </xsl:attribute>
                      <xsl:value-of select="sitemap:priority"/>
                    </span>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>