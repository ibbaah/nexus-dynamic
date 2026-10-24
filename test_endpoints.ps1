$urls = @(
  'http://localhost:8080/',
  'http://localhost:8080/index.html',
  'http://localhost:8080/css/variables.css',
  'http://localhost:8080/css/base.css',
  'http://localhost:8080/css/components.css',
  'http://localhost:8080/css/sections.css',
  'http://localhost:8080/css/responsive.css',
  'http://localhost:8080/js/data.js',
  'http://localhost:8080/js/canvas.js',
  'http://localhost:8080/js/app.js',
  'http://localhost:8080/assets/images/hero_neural_ai.jpg',
  'http://localhost:8080/assets/images/project_ai_analytics.jpg',
  'http://localhost:8080/assets/images/project_fintech_nexus.jpg',
  'http://localhost:8080/assets/images/project_spatial_vision.jpg',
  'http://localhost:8080/assets/images/project_cloud_mesh.jpg',
  'http://localhost:8080/assets/images/studio_nexus_hq.jpg'
)

$allPassed = $true
foreach ($u in $urls) {
  try {
    $resp = Invoke-WebRequest -Uri $u -Method Get -UseBasicParsing
    Write-Host "[$($resp.StatusCode)] $($resp.RawContentLength) bytes - $u"
  } catch {
    Write-Host "[ERROR] Failed to fetch $u : $_" -ForegroundColor Red
    $allPassed = $false
  }
}

if ($allPassed) {
  Write-Host "ALL 16 ASSETS AND PAGES DELIVERED 200 OK!" -ForegroundColor Green
}
