		{
			'url': 'data/MNI152.nii.gz',
			'name': 'MNI152 2mm',
			'colorPalette': 'grayscale',
			'cache': false,
			'intent': 'Intensity:'
		},
		{
			'url': 'data/temporal_pole.nii.gz',
			'name': 'Temporal_pole',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/frontal_pole.nii.gz',
			'name': 'Frontal_pole',
			'colorPalette': 'blue',
			'intent': 'z-score:'
		},
		{
			'url': 'data/occ_pole.nii.gz',
			'name': 'Occipital_pole',
			'colorPalette': 'purple',
			'intent': 'z-score:'
		},
		{
			'url': 'data/ang_gyr.nii.gz',
			'name': 'Angular_gyrus',
			'colorPalette': 'yellow',
			'intent': 'z-score:'
		},
		{
			'url': 'data/precentral_gyr.nii.gz',
			'name': 'Precentral_gyrus',
			'colorPalette': 'green',
			'intent': 'z-score:'
		},
		{
			'url': 'data/faces_association-test_z_FDR_0.01.nii.gz',
			'name': 'Faces',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/color_association-test_z_FDR_0.01.nii.gz',
			'name': 'Color',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/shapes_association-test_z_FDR_0.01.nii.gz',
			'name': 'Shapes',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/images_association-test_z_FDR_0.01.nii.gz',
			'name': 'Images',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/objects_association-test_z_FDR_0.01.nii.gz',
			'name': 'Objects',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},

+++++++
jQuery(document).ready(function() {

	viewer = new Viewer('#layer_list', '.layer_settings');
	viewer.addView('#view_axial', Viewer.AXIAL);
	viewer.addView('#view_coronal', Viewer.CORONAL);
	viewer.addView('#view_sagittal', Viewer.SAGITTAL);
	viewer.addSlider('opacity', '.slider#opacity', 'horizontal', 0, 1, 1, 0.05);
	viewer.addSlider('pos-threshold', '.slider#pos-threshold', 'horizontal', 0, 1, 0, 0.01);
	viewer.addSlider('neg-threshold', '.slider#neg-threshold', 'horizontal', 0, 1, 0, 0.01);
	viewer.addSlider("nav-xaxis", ".slider#nav-xaxis", "horizontal", 0, 1, 0.5, 0.01, Viewer.XAXIS);
	viewer.addSlider("nav-yaxis", ".slider#nav-yaxis", "vertical", 0, 1, 0.5, 0.01, Viewer.YAXIS);
	viewer.addSlider("nav-zaxis", ".slider#nav-zaxis", "vertical", 0, 1, 0.5, 0.01, Viewer.ZAXIS);

	viewer.addColorSelect('#select_color');
	viewer.addSignSelect('#select_sign')
	viewer.addDataField('voxelValue', '#data_current_value')
	viewer.addDataField('currentCoords', '#data_current_coords')
	viewer.addTextField('image-intent', '#image_intent')
	viewer.clear()   // Paint canvas background while images load
	images = [
		{
			'url': 'data/objects_association-test_z_FDR_0.01.nii.gz',
			'name': 'Objects',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/images_association-test_z_FDR_0.01.nii.gz',
			'name': 'Images',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/shapes_association-test_z_FDR_0.01.nii.gz',
			'name': 'Shapes',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/color_association-test_z_FDR_0.01.nii.gz',
			'name': 'Color',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/faces_association-test_z_FDR_0.01.nii.gz',
			'name': 'Faces',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/precentral_gyr.nii.gz',
			'name': 'Precentral_gyrus',
			'colorPalette': 'green',
			'intent': 'z-score:'
		},
		{
			'url': 'data/ang_gyr.nii.gz',
			'name': 'Angular_gyrus',
			'colorPalette': 'yellow',
			'intent': 'z-score:'
		},
		{
			'url': 'data/occ_pole.nii.gz',
			'name': 'Occipital_pole',
			'colorPalette': 'purple',
			'intent': 'z-score:'
		},
		{
			'url': 'data/frontal_pole.nii.gz',
			'name': 'Frontal_pole',
			'colorPalette': 'blue',
			'intent': 'z-score:'
		},
		{
			'url': 'data/temporal_pole.nii.gz',
			'name': 'Temporal_pole',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/MNI152.nii.gz',
			'name': 'MNI152 2mm',
			'colorPalette': 'grayscale',
			'cache': false,
			'intent': 'Intensity:'
		},
		{	
			'name': 'spherical ROI',
			'colorPalette': 'yellow',
			'data': {
				'dims': [91, 109, 91],
				'peaks': [
					{
						'x': -48,
						'y': 20,
						'z': 20, 
						'r': 6, 
						'value': 1
					}
				]
			}
		}
	]
	viewer.loadImages(images);

});