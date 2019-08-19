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
			'url': 'data/visually_association-test_z_FDR_0.01.nii.gz',
			'name': '           ',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/vmpfc_association-test_z_FDR_0.01.nii.gz',
			'name': 'Voxel size',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/wm_association-test_z_FDR_0.01.nii.gz',
			'name': 'Block design',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/word_association-test_z_FDR_0.01.nii.gz',
			'name': 'Event design',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/working_association-test_z_FDR_0.01.nii.gz',
			'name': 'Stimulus time',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/ambiguous_association-test_z_FDR_0.01.nii.gz',
			'name': 'Spacial Smoothing (mm)',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/written_association-test_z_FDR_0.01.nii.gz',
			'name': 'Degree of trial averaging',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/affect_association-test_z_FDR_0.01.nii.gz',
			'name': 'Percentage of training data',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/anger_association-test_z_FDR_0.01.nii.gz',
			'name': 'Classification across runs',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/calculation_association-test_z_FDR_0.01.nii.gz',
			'name': 'Classification within runs',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/chinese_association-test_z_FDR_0.01.nii.gz',
			'name': 'SVM classifier',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/communication_association-test_z_FDR_0.01.nii.gz',
			'name': 'Correlation Classifier ',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/delay_association-test_z_FDR_0.01.nii.gz',
			'name': 'Voxel count',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/difficulty_association-test_z_FDR_0.01.nii.gz',
			'name': 'Task',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/diseases_association-test_z_FDR_0.01.nii.gz',
			'name': 'Photograph image',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/eating_association-test_z_FDR_0.01.nii.gz',
			'name': 'Rendered image',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/events_association-test_z_FDR_0.01.nii.gz',
			'name': 'Grayscale',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/face_association-test_z_FDR_0.01.nii.gz',
			'name': 'Cluttered',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/form_association-test_z_FDR_0.01.nii.gz',
			'name': 'Isolated',
			'colorPalette': 'red',
			'intent': 'z-score:'
		},
		{
			'url': 'data/frontal_association-test_z_FDR_0.01.nii.gz',
			'name': 'Number of exemplars per class',
			'colorPalette': 'red',
			'intent': 'z-score:'
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