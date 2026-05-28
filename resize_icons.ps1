Add-Type -AssemblyName System.Drawing
$source = "c:\Users\amalb\OneDrive\Documents\IBTE WORK STUFFS\SEM2 Mini Project - AmalBasirah HITN38\cv-app\images\icon-square-app.png"
$sizes = @(72, 96, 128, 152, 512)

foreach ($size in $sizes) {
    $dest = "c:\Users\amalb\OneDrive\Documents\IBTE WORK STUFFS\SEM2 Mini Project - AmalBasirah HITN38\cv-app\images\icon-$size.png"
    $bmp = [System.Drawing.Image]::FromFile($source)
    $resized = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($resized)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($bmp, 0, 0, $size, $size)
    $resized.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $resized.Dispose()
    $bmp.Dispose()
    Write-Host "Resized to $size"
}
