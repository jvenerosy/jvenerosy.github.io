http_path = "/"
sass_dir = "./"
css_dir = "../css"
images_dir = "../img"
javascripts_dir = "../js"
relative_assets = true
output_style = (environment == :development) ? :expanded : :compressed
sass_options = (environment == :development) ? {:debug_info => true, :sourcemap => true, relative_assets => true } : {:debug_info => false, :sourcemap => false }